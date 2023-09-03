import { getOrders, updateOrder } from '@/api';
import { Layout } from '@/components/ui/Layout';
import { useSelector } from '@/hooks/useSelector';
import { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function PaymentOrderId() {
  const params = useParams();
  const navigate = useNavigate();
  const [query] = useSearchParams();

  const products = useSelector((state) => state.products);

  useEffect(() => {
    getOrders().then((orders) => {
      if (!orders) return;
      if (!products.length) return;

      const order = orders.filter((order) => String(order.orderId) === String(params.orderId))[0];
      const product = products.filter(
        (i) => i.title.trim().toLowerCase() === order.title.trim().toLowerCase()
      )[0];

      console.log(product);

      updateOrder(String(order.orderId), 'Оплачено', query.get('email') as string, product).then(
        () => {
          navigate('/');
        }
      );
    });
  }, [params.orderId, navigate, query, products]);

  return (
    <Layout hidden>
      <></>
    </Layout>
  );
}
