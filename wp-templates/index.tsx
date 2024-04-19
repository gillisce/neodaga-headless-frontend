import category from './category';
import tag from './tag';
import frontPage from './front-page';
import page from './page';
import single from './single';
import SingleCPT from './Single-Post-View/single-cpt';
import ArchiveCPT from './Archive-Pages/archive-cpt';

export default {
  category,
  tag,
  'front-page': frontPage,
  page,
  single,
  'single-cpt': SingleCPT, //This will need updated for your custom post type 
  'archive-cpt':ArchiveCPT, //This will need updated for your custom post types
};
