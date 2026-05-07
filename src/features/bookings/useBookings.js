import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get('status') || 'all';
  
  const filter = 
    !filterValue || filterValue === 'all' 
      ? null 
      : { field: 'status', value: filterValue, method: 'eq' };

  const sortByRaw = searchParams.get('sortBy') || 'startDate-asc';
  const [field, direction] = sortByRaw.split('-');
  const sortBy = { field, direction };

  const page = !searchParams.get('page') ? 1 : +searchParams.get('page');

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ['bookings', filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page })
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function prefetchPage(page) {
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page],
      queryFn: () => getBookings({ filter, sortBy, page }),
    });
  }

  if (page < pageCount) {
    prefetchPage(page + 1);
  }

  if (page > 1) {
    prefetchPage(page - 1);
  }

  return { isLoading, bookings, count, error };
}
