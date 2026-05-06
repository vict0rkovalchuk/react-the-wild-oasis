import { useSearchParams } from "react-router-dom";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Empty from "../../ui/Empty";

export default function CabinTable() {
  const { isLoading, cabins, error } = useCabins();
  const [searchParams] = useSearchParams();

  if(isLoading) return <Spinner />;

  // Filter
  const filterValue = searchParams.get('discount') || 'all';

  const filters = {
    all: cabins,
    'no-discount': cabins.filter(cabin => !cabin.discount),
    'with-discount': cabins.filter(cabin => cabin.discount),
  };

  const filteredCabins = filters[filterValue];

  // Sort
  const sortBy = searchParams.get('sortBy') || 'created_at-asc';
  const [field, direction] = sortBy.split('-');
  const sortedCabins = filteredCabins.toSorted((a, b) => a[field] - b[field]);
  if (direction === 'desc') sortedCabins.reverse();

  if(!sortedCabins.length) return <Empty resourceName='cabins'/>;

  return (
    <Menus>
      <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body 
          data={sortedCabins} 
          render={cabin => <CabinRow cabin={cabin} key={cabin.id} />} 
        />
      </Table>
    </Menus>
  )
}
