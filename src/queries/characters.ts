import { gql } from '../__generated__/';

export const GET_CHARACTERS_QUERY = gql(`
query characters($page: Int, $filter: FilterCharacter) {
  characters(page: $page, filter: $filter) {
    info {
      count
      pages
      next
      prev
    }
    results {
      id
      name
      status
      species
      type
      episode {
        name
      }
      image
    }
  }
}
`);
