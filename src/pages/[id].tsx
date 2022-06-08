import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import { BlogPost } from 'src/shared/types/blog-post';

import { fetch } from 'src/shared/utils/fetch';

type TBlogProps = {
  post: BlogPost;
};

const Blog: FC<TBlogProps> = () => {
  return (
    <div>
      
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps<TBlogProps> = async () => {
//   // const id = ctx.query.id;
//   // const post = await fetch(`/api/blog-posts/${id}`);

//   // return { props: { post } };
//   return {};
// };

export default Blog;
