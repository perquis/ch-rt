import { PropsWithChildren } from 'react';

interface IFeedbackMessage {
  status?: 'error' | 'loading';
}

export const FeedbackMessage = ({ children, status }: PropsWithChildren & IFeedbackMessage) => {
  let classes = '';

  if (status === 'error') {
    classes = 'text-red-500';
  } else if (status === 'loading') {
    classes = 'text-blue-700';
  } else {
    classes = 'text-gray-500';
  }

  return (
    <div>
      <p className={`text-center ${classes} text-xl mt-4`}>{children}</p>
    </div>
  );
};
