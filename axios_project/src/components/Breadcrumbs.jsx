import { Breadcrumb } from "antd";
import { HomeFilled, HomeOutlined } from "@ant-design/icons";

function Breadcrumbs() {
  return (
    <div>
      <Breadcrumb
        separator=">>>"
        items={[
          {
            title: <HomeFilled />,
          },
          {
            title: <a href="">Application Center</a>,
          },
          {
            title: <a href="">Application List</a>,
          },
          {
            title: "An Application",
          },
        ]}
      />
    </div>
  );
}

export default Breadcrumbs;
