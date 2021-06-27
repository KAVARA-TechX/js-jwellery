import React from 'react';
import { Card } from 'antd';
import {EditOutlined,DeleteOutlined} from "@ant-design/icons";
import {Link} from 'react-router-dom';
const { Meta } = Card;

const AdminProductCard = ({product}) =>{
    const {title,description,images,slug} = product;
    return <Card
    hoverable
    style={{ width: 300 }}
    cover={<img alt="example" style={{height:"180px"}} className="p-2" src={images && images.length ? images[0].url :"" } />}
    actions={[
        <Link to={`/admin/product/${slug}`}>
        <EditOutlined className="text-warning"/>
        </Link>,<DeleteOutlined className="text-danger"/>
    ]}
  >
    <Meta title={title} description={`${description && description.substring(0,40)}...`} />
  </Card>;
}

export default AdminProductCard;