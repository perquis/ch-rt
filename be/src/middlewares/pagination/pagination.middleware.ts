import { isNumber } from '@/utils/is-number';
import { makePaginationUrl } from '@/utils/make-pagination-url';
import { validatePagination } from '@/validations/pagination.validation';
import { NextFunction, Request, Response } from 'express';
import { Model } from 'mongoose';

export const pagination = (Model: Model<any>) => async (req: Request, res: Response, nextFunction: NextFunction) => {
  const { page = '1', limit = '6', ...query } = req.query;

  if (!isNumber(page) && !isNumber(limit)) {
    res.status(400).send({
      message: 'Invalid query',
    });
    return;
  }

  const { error } = validatePagination({ page, limit });

  if (error) {
    res.status(400).send({
      message: error.errors,
    });

    return;
  }

  const currentPage = parseInt(page, 10),
    limitNumber = parseInt(limit, 10),
    skip = (currentPage - 1) * limitNumber;

  const quantity = await Model.countDocuments(query),
    totalPages = Math.ceil(quantity / limitNumber);

  const nextPage = currentPage < totalPages ? currentPage + 1 : null,
    prevPage = currentPage > 1 ? currentPage - 1 : null;

  const next = makePaginationUrl(req, nextPage, limitNumber, query),
    prev = makePaginationUrl(req, prevPage, limitNumber, query);

  req.pagination = {
    currentPage,
    limitNumber,
    quantity,
    totalPages,
    skip,
    next,
    prev,
  };

  delete req.query.page;
  delete req.query.limit;

  nextFunction();
};
