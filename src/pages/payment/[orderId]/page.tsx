import { getOrders, updateOrder } from '@/api';
import { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function PaymentOrderId() {
  const params = useParams();
  const navigate = useNavigate();
  const [query] = useSearchParams();

  useEffect(() => {
    getOrders().then((orders) => {
      if (!orders) return;

      const order = orders.filter((order) => String(order.orderId) === String(params.orderId))[0];
      updateOrder(order.id, 'Оплачено', query.get('email') as string).then(() => {
        navigate('/');
      });
    });
  }, [params.orderId, navigate, query]);

  return <></>;
}
