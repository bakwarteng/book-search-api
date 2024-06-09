import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation login($email: String!, $password: String!, $username: String!) {
    login(email: $email, password: $password, username: $username) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const SAVE_BOOK = gql`
  mutation saveBook($bookId: ID!, $authors: [String]!, $description: String!, $image: String, $link:String, $title: String) {
    saveBook(bookId: $bookId, authors: $authors, description: $description, image: $image, link :$link, title: $title) {
      _id 
      username
      email
    savedBooks {
        bookId
        authors
        image
        description
        title
        link

      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook(
    $bookId: ID!
   
  ) {
    saveBook(
      bookId: $bookId
      
    ) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;