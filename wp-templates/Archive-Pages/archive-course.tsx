import { gql } from '@apollo/client';
import Link from 'next/link';

export default function ArchiveCourses(props) {
  const { label, contentNodes } = props.data.nodeByUri;

  return (
    <>
      <h1>{label} Archive</h1>

      <ul>
        {contentNodes.nodes.map((node) => (
          <li>
            <Link href={node.uri}>{node.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

ArchiveCourses.variables = ({ uri }) => {
  return { uri };
};

ArchiveCourses.query = gql`
  query CourseArchive($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on ContentType {
        label
        description
        contentNodes {
          nodes {
            databaseId
            uri
            ... on NodeWithTitle {
              title
            }
          }
        }
      }
    }
  }
`;