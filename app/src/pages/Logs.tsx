import { PageLayout } from "../common/components/layouts/PageLayout";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const Logs = () => {
  return (
    <PageLayout title="Logs" className="">
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Column 1</Th>
              <Th>Column 2</Th>
              <Th isNumeric>Column 3</Th>
            </Tr>
          </Thead>

          <Tbody>
            {[...Array(5)].map((e, index) => (
              <Tr key={index}>
                <Td>inches</Td>
                <Td>millimetres</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </PageLayout>
  );
};

export default Logs;
