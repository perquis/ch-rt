import { pagination } from "@/middlewares/pagination/pagination.middleware";
import { validateRequest } from "@/middlewares/validate-request/validate-request.middleware";

export const middlewares = {
  pagination,
  validateRequest,
};
