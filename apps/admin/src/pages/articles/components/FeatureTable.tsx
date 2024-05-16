import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const FeatureTable = () => {
  /** TODO: 데이터 가져오기 */
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>No.</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody></TableBody>
    </Table>
  );
};
export default FeatureTable;
