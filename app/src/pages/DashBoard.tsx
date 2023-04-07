import {
  FolderIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";
import { PageLayout } from "../common/components/layouts/PageLayout";
import { Button } from "@chakra-ui/react";

const DashBoard = () => {
  return (
    <PageLayout title="DashBoard" className="flex flex-col items-center gap-4">
      <div className="w-full grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        <div className="p-4 grid gap-4 border-2 rounded-md">
          <div className="flex items-center justify-between">
            <FolderIcon className="w-8 h-8" />

            <h2>1</h2>
          </div>

          <h5>Total Files</h5>
        </div>
        <div className="text-green-600 bg-green-100 border-2 border-green-500 p-4 grid gap-4 rounded-md">
          <div className="flex items-center justify-between">
            <ShieldCheckIcon className="w-8 h-8" />

            <h2>1</h2>
          </div>

          <h5>Ok</h5>
        </div>
        <div className="text-red-600 bg-red-100 border-2 border-red-500 p-4 grid gap-4 rounded-md">
          <div className="flex items-center justify-between">
            <ShieldExclamationIcon className="w-8 h-8" />

            <h2>1</h2>
          </div>

          <h5>Security risk</h5>
        </div>
      </div>

      <Button colorScheme="green" size="lg">
        Scan Now
      </Button>
    </PageLayout>
  );
};

export default DashBoard;
