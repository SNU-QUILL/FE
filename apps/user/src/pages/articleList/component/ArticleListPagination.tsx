import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
  PaginationEllipsis,
} from "@repo/ui";

interface IArticleListPaginationProps {
  currentPage: number;
  totalPages: number;
  onPreviousClick: () => void;
  onNextClick: () => void;
}

const ArticleListPagination = ({
  currentPage,
  totalPages,
  onPreviousClick,
  onNextClick,
}: IArticleListPaginationProps) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const renderPageNumbers = () => {
    const items = [];

    // 첫 페이지
    items.push(
      <PaginationItem key={1}>
        <PaginationLink
          isActive={currentPage === 1}
          onClick={() => {
            if (currentPage !== 1) onPreviousClick();
          }}
        >
          1
        </PaginationLink>
      </PaginationItem>,
    );

    // 첫 페이지와 현재 페이지 앞의 숫자 사이에 간격이 있는 경우 줄임표 추가
    if (currentPage - 2 > 1) {
      items.push(
        <PaginationItem key='ellipsis1'>
          <PaginationEllipsis />
        </PaginationItem>,
      );
    }

    // 현재 페이지 앞의 숫자
    if (currentPage - 1 > 1) {
      items.push(
        <PaginationItem key={currentPage - 1}>
          <PaginationLink onClick={onPreviousClick}>{currentPage - 1}</PaginationLink>
        </PaginationItem>,
      );
    }

    // 현재 페이지 (첫 페이지나 마지막 페이지가 아닌 경우)
    if (currentPage !== 1 && currentPage !== totalPages) {
      items.push(
        <PaginationItem key={currentPage}>
          <PaginationLink isActive={true}>{currentPage}</PaginationLink>
        </PaginationItem>,
      );
    }

    // 현재 페이지 뒤의 숫자
    if (currentPage + 1 < totalPages) {
      items.push(
        <PaginationItem key={currentPage + 1}>
          <PaginationLink onClick={onNextClick}>{currentPage + 1}</PaginationLink>
        </PaginationItem>,
      );
    }

    // 현재 페이지 뒤의 숫자와 마지막 페이지 사이에 간격이 있는 경우 줄임표 추가
    if (currentPage + 2 < totalPages) {
      items.push(
        <PaginationItem key='ellipsis2'>
          <PaginationEllipsis />
        </PaginationItem>,
      );
    }

    // 마지막 페이지
    if (totalPages > 1) {
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            isActive={currentPage === totalPages}
            onClick={() => {
              if (currentPage !== totalPages) onNextClick();
            }}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return items;
  };

  return (
    <Pagination>
      <PaginationContent className='flex items-center gap-4 select-none mt-4'>
        <PaginationItem>
          <PaginationPrevious
            className={isFirstPage ? "opacity-50" : ""}
            size='default'
            onClick={isFirstPage ? undefined : onPreviousClick}
          />
        </PaginationItem>

        {renderPageNumbers()}

        <PaginationItem>
          <PaginationNext
            className={isLastPage ? "opacity-50" : ""}
            size='default'
            onClick={isLastPage ? undefined : onNextClick}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ArticleListPagination;
