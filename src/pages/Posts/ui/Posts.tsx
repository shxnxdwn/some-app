import styles from './Posts.module.css';
import { PostLengthFilter } from '@/features/PostLengthFilter';
import { PostList } from '@/widgets/PostList';
import { useGetPostsQuery } from '@/entities/Post';
import Pagination from '@/shared/ui/Pagination';
import { usePostPagination } from '@/pages/Posts/model/hooks/usePostPagination';

const POSTS_PER_PAGE = 10;

const Posts = () => {
  const { data: posts = [], isLoading, isError } = useGetPostsQuery();

  const { currentPage, totalPages, paginatedPosts, activeFilter, handleFilterChange, handlePageChange } =
    usePostPagination({ posts, itemsPerPage: POSTS_PER_PAGE });

  if (isError) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Ошибка при загрузке постов</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Посты</h1>

      <PostLengthFilter className={styles.filter} activeFilter={activeFilter} onFilterChange={handleFilterChange} />

      <div className={styles.contentWrapper}>
        <PostList isLoading={isLoading} posts={paginatedPosts} />
      </div>

      {!isLoading && totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      )}
    </div>
  );
};

export default Posts;
