// Example Page for a Custom Post Type
// This will need updated based on how your custom posts are named
// The Page should follow the template name called out when trying to access the page via the front-end
// i.e. [archive-movie, archive]

import { gql } from '@apollo/client';
import Link from 'next/link';
import { UrlObject } from 'url';

export default function ArchiveCPT(props: { data: { nodeByUri: { label: any; contentNodes: any; }; }; }) {
  const { label, contentNodes } = props.data.nodeByUri;

  return (
    <>
      <h1>{label} Archive</h1>

      <ul>
        {contentNodes.nodes.map((node: { uri: string | UrlObject; title: string | null | undefined; }) => (
          <li>
            <Link href={node.uri}>{node.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

ArchiveCPT.variables = ({ uri }: any) => {
  return { uri };
};

ArchiveCPT.query = gql`
  query CPTArchive($uri: String!) {
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