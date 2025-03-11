import { apiSlice } from "@/app/Redux/apiSlice";
import type { Book } from "@/types/types";

const bookSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], void>({
      query: () => "api/books",
      providesTags: ["Books"], 
    }),
    getBooksById: builder.query<Book, string>({
      query: (id) => `api/books/${id}`, 
      providesTags: (result, error, id) => [{ type: "Books", id }],
    }),
    addBook: builder.mutation<Book, FormData>({
      query: (formData) => ({
        url: "api/books/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation<Book, Partial<Book>>({
      query: ({ book_id, ...rest }) => ({
        url: `api/books/${book_id}`,  
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: (result, error, { book_id }) => 
        book_id ? [{ type: "Books", id: book_id }, { type: "Books" }] : [{ type: "Books" }],
    }),
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `api/books/${id}`,  
        method: "DELETE",
      }),
      invalidatesTags: ["Books"], 
    }),
    approveBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `api/books/${id}/approve`,
        method: "PUT",
      }),
      invalidatesTags: ["Books"],
    }),
    rejectBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `api/books/${id}/reject`,
        method: "PUT",
      }),
      invalidatesTags: ["Books"],
    })
  }),

});

export const { 
  useGetBooksQuery, 
  useGetBooksByIdQuery, 
  useAddBookMutation, 
  useUpdateBookMutation, 
  useDeleteBookMutation,
  useApproveBookMutation,
  useRejectBookMutation
} = bookSlice;

export default bookSlice;
