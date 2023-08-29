/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

const useCackleWidget = () => {
  useEffect(() => {
    // Создаем элемент для скрипта
    const cackleWidgetScript = document.createElement('script');
    cackleWidgetScript.type = 'text/javascript';
    cackleWidgetScript.async = true;
    cackleWidgetScript.src =
      (document.location.protocol === 'https:' ? 'https' : 'http') + '://cackle.me/widget.js';

    // Поиск первого <script> элемента и вставка скрипта перед ним
    const existingScript = document.getElementsByTagName('script')[0] as any;
    existingScript.parentNode.insertBefore(cackleWidgetScript, existingScript.nextSibling);

    // Инициализация cackle_widget массива
    (window as any).cackle_widget = (window as any).cackle_widget || [];
    (window as any).cackle_widget.push({ widget: 'Review', id: 80653 });

    // Очистка при размонтировании
    return () => {
      if (cackleWidgetScript.parentNode) {
        cackleWidgetScript.parentNode.removeChild(cackleWidgetScript);
      }
    };
  }, []);
};

export { useCackleWidget };
