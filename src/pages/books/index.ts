import React from 'react';

export const AllBooks = React.lazy(() => import("./AllBooks"));
export const BookDetail = React.lazy(() => import("./BookDetail"));
export const CreateNewBook = React.lazy(() => import("./CreateBook"));