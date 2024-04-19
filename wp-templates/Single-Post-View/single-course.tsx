import { gql } from '@apollo/client';

export default function SingleCourse(props) {
  const { title, content } = props.data.nodeByUri;

  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

SingleCourse.variables = ({ uri }) => {
  return { uri };
};

SingleCourse.query = gql`
  query GetCourseByUri($uri: String!) {
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