

const typeDefs = `
  # Define which fields are accessible from the Class model
  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }
    type Auth{
      token:ID
      user: User
  
      
      }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    Me: User
  }
`;

`type User {
    _id: ID
    username: String
    email: String
    password: String
  savedBooks: [Book]
  }`
`type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(authors: [String], description:String, bookId: String, image:String, link:String, title:String): User
    removeBook(BookId: ID!): User
    
  }`



module.exports = typeDefs;
