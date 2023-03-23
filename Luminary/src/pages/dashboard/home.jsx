import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";

export function Home() {
  return (
    <div className="flex space-x-6">
      <Card className="flex py-6 w-96">
        <CardHeader color="blue" className="relative h-50">
          <img
            src="./../public/img/ntu-news-image-1.jpg"
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            NTU rises 10 places to place 36th in Times Higher Education global rankings
          </Typography>
          <Typography>
            NTU improved its score in four of the five ranking indicators for Research, Teaching, Citations and International Outlook. It scored highly for Research, which calculates the volume, income, and reputation of research excellence conducted by the University.
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">Published on 12 Oct 2022</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
            Singapore
          </Typography>
        </CardFooter>
      </Card>
      <Card className="flex py-6 w-96">
        <CardHeader color="blue" className="relative h-50">
          <img
            src="./../public/img/ntu-news-image-4.jpg"
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            Class of 2022 continue to be in demand and earn higher salaries
          </Typography>
          <Typography>
          According to the 2022 Joint Autonomous Universities Graduate Employment Survey (JAUGES), the cohort also earned higher salaries, with a mean gross monthly salary of $4,443 for fresh graduates in full-time permanent employment , an increase from $4,000 in 2021. Their median gross monthly salary was also higher at $4,200, an increase from $3,750 in 2021.
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">Published on 20 Feb 2023</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
            Singapore
          </Typography>
        </CardFooter>
      </Card>
      <Card className="flex py-6 w-96">
        <CardHeader color="blue" className="relative h-50">
          <img
            src="./../public/img/ntu-news-image-3.jpg"
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
          A new approach to stabilise perovskite solar cells without lead
          </Typography>
          <Typography>
          Their study, published in Nature Energy in February 2023 and headed by Prof Sum Tze Chien, Director of the Institute of Advanced Studies at NTU and Associate Dean (Research) of NTU’s College of Science, and Prof Lam Yeng Ming, Chair of NTU’s School of Materials Science and Engineering, could take perovskite solar cells one step closer to the market.
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">Published on 27 Feb 2023</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
            Singapore
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Home;
