// Example Page for a Custom Post Type
// This will need updated based on how your custom posts are named
// The Page should follow the template name called out when trying to access the page via the front-end
// i.e. [single-movie, singular]

import { gql } from '@apollo/client';

export default function SingleCPT(props: { data: { nodeByUri: { title: any; content: any; }; }; }) {
  const { title, content } = props.data.nodeByUri;

  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

SingleCPT.variables = ({ uri } :any) => {
  return { uri };
};

SingleCPT.query = gql`
  query GetCPTByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on NodeWithTitle {
        title
      }
      ... on NodeWithContentEditor {
        content
      }
    }
  }
`;