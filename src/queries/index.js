import gql from 'graphql-tag';

export const ALL_COMPANIES = gql`
query AllCompanies($before: String, $after: String, $first: Int, $last: Int){
  allCompanies(before: $before, after: $after, first: $first, last: $last) {
  	edges{
      node{
        id
        companyName
        companyPosterImage
        opensAt
        closesAt
      }
    }
  }
}
`;

export const COMPANY = gql`
query company($id: ID!){
  company(id: $id){
    id
    companyPosterImage
    companyName
    description
    establishedIn
    createdDate
    opensAt
    closesAt
  }
}
`;