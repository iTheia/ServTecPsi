export const errorResponse = (error: any) => {
  if (error instanceof Error) {
    return {
      error: true,
      message: error.message,
    };
  }

  return {
    error: true,
    message: error,
  };
};
