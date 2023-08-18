import { Link } from 'react-router-dom';

import type { Instruction } from '@/types';

export const instructions: Instruction[] = [
  {
    id: 1,
    title: 'Инструкция по активации Windows 10 Pro и Windows 10 Home',
    image: '/assets/images/instructions/1-387х250.png',
    content: (
      <div>
        <p>
          Чтобы активировать Windows 10 вам потребуется ключ — приобрести его можно в нашем
          каталоге. Ключ вводится после установки системы.
        </p>
        <ul>
          <li>
            <p>Откройте системный инструмент «Параметры»: </p>
            <img src={'/assets/images/instructions/1/1.jpeg'} alt='' />
          </li>
          <li>
            <p>Нажмите на «Обновление и безопасность»: </p>
            <img src={'/assets/images/instructions/1/2.jpeg'} alt='' />
          </li>
          <li>
            <p>
              В новом окне выберите пункт «Активация», нажмите «изменить ключ продукта» и введите
              купленный ключ активации
            </p>
            <img src={'/assets/images/instructions/1/3.jpeg'} alt='' />
          </li>
          <li>
            <p>Поздравляем, система активирована!</p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Инструкция по активации Windows 11 Pro и Windows 11 Home',
    image: '/assets/images/instructions/2-387х250.png',
    content: (
      <div>
        <p>
          Чтобы активировать Windows 10 вам потребуется ключ — приобрести его можно в нашем
          каталоге. Ключ вводится после установки системы.
        </p>
        <ul>
          <li>
            <p>Кликнуть на значок Windows левой кнопкой мыши. </p>
            <img src={'/assets/images/instructions/2/1.png'} alt='' />
          </li>
          <li>
            <p>Выбрать вкладку «Параметры» (Шестеренка).</p>
            <img src={'/assets/images/instructions/2/2.png'} alt='' />
          </li>
          <li>
            <p>Выбрать раздел «Система» </p>
            <img src={'/assets/images/instructions/2/3.png'} alt='' />
          </li>
          <li>
            <p>
              Кликнуть на вкладку «Активация» и посмотреть состояние активации Windows 11. Состояние
              «Не активирована» означает, что нужно внести ключ продукта. Для этого в том же меню
              кликните на кнопку «Изменить» в пункте «Изменить ключ продукта».{' '}
            </p>
            <img src={'/assets/images/instructions/2/4.png'} alt='' />
          </li>
          <li>
            <p>Введите ключ активации Windows 11 и нажмите кнопку «Активировать» </p>
          </li>
          <li>
            <p>Поздравляем, система активирована </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Инструкция по активации office без привязки к учетной записи и с привязкой',
    image: '/assets/images/instructions/3-387х250.png',
    content: (
      <div>
        <p>Как активировать Office без привязки к учетной записи </p>
        <ul>
          <li>
            <p>
              Для начала загрузите необходимый дистрибутив, ссылка на скачивание есть в карточке
              товара
            </p>
          </li>
          <li>
            <p>Удалите все имеющиеся версии Office с компьютера </p>
          </li>
          <li>
            <p>Установите загруженный пакет программ </p>
          </li>
          <li>
            <p>Запустите любую программу, которая входит в пакет Офиса. </p>
          </li>
          <li>
            <p>Перейдите в меню Файл - Учетная запись </p>
            <img src={'/assets/images/instructions/3/1.png'} alt='' />
          </li>
          <li>
            <p>
              Если продукт ранее не был активирован нажмите Изменить ключ, если ранее уже был
              активирован - Сменить лицензию
            </p>
            <img src={'/assets/images/instructions/3/2.png'} alt='' />
          </li>
          <li>
            <p>
              Далее введите ключ продукта (Если у Вас нет ключа, приобрести его можно в нашем
              каталоге)
            </p>
            <img src={'/assets/images/instructions/3/3.png'} alt='' />
          </li>
          <li>
            <p>
              После успешной активации у Вас отобразится следующее сообщение - Продукт активирован{' '}
            </p>
            <img src={'/assets/images/instructions/3/4.png'} alt='' />
          </li>
          <li>
            <p>Поздравляем! Программа активирована </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Как активировать Office с привязкой к учетной записи ',
    image: '/assets/images/instructions/4-387х250.png',
    content: (
      <div>
        <ul>
          <li>
            <p>Зайдите на сайт setup.office.com под своей учетной записью Microsoft </p>
            <img src={'/assets/images/instructions/4/1.png'} alt='' />
          </li>
          <li>
            <p>Введите купленный ключ активации </p>
            <img src={'/assets/images/instructions/4/2.png'} alt='' />
          </li>
          <li>
            <p>Удалите все имеющиеся версии Office с компьютера </p>
            <img src={'/assets/images/instructions/4/3.png'} alt='' />
          </li>
          <li>
            <p>
              Нажмите {'"'}Далее{'"'} и {'"'}Подтвердить{'"'}{' '}
            </p>
          </li>
          <li>
            <p>Ваш ключ успешно активирован и привязан к Вашей учетной записи </p>
          </li>
          <li>
            <p>
              Теперь скачайте и установите необходимый пакет программ, ссылка на загрузку доступна в
              карточке товара{' '}
            </p>
          </li>
          <li>
            <p>Запустите любую программу, которая входит в пакет Офиса. </p>
            <p>Перейдите в меню Файл - Учетная запись </p>
            <img src={'/assets/images/instructions/4/4.png'} alt='' />
          </li>
          <li>
            <p>Далее войдите в свою учетную запись </p>
            <img src={'/assets/images/instructions/4/5.png'} alt='' />
          </li>
          <li>
            <p>Пакет программ активирован! </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Инструкция по активации Windows 7',
    image: '/assets/images/instructions/5-387х250.png',
    content: (
      <div>
        <ul>
          <li>
            <p>
              Наводим стрелку мыши на ярлык «Мой компьютер» и щелкаем по нему правой кнопкой мыши,
              далее в появившемся меню в самом низу находим пункт «Свойства», нажимаем на него левой
              кнопкой мыши и видим вот такое окно:
            </p>
            <img src={'/assets/images/instructions/5/1.jpeg'} alt='' />
          </li>
          <li>
            <p>Нажимаем пункт «Изменить ключ продукта» в самом низу </p>
            <img src={'/assets/images/instructions/5/2.jpeg'} alt='' />
          </li>
          <li>
            <p>Вводим купленный ключ продукта и нажимаем «Далее» </p>
          </li>
          <li>
            <p>Система активирована! </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 6,
    title: 'Инструкция по активации Office 365 Pro Plus',
    image: '/assets/images/instructions/6-387х250.png',
    content: (
      <div>
        <ul>
          <li>
            <p>
              Перед установкой желательно удалить все предыдущие версии Office на вашем компьютере
              через {'"'}установка и удаление программ{'"'}.
              <br />
              Сначала нужно войти на сайт http://office.com/ используя полученный логин и пароль.
            </p>
            <img src={'/assets/images/instructions/6/1.png'} alt='' />
          </li>
          <li>
            <p>
              После входа в аккаунт, система предложит сменить пароль, измените его и обязательно
              запишите, т.к. восстановление будет невозможно.
            </p>
            <img src={'/assets/images/instructions/6/2.png'} alt='' />
          </li>
          <li>
            <p>
              В поле {'"'}текущий пароль{'"'} вводим пароль из красной зоны выше.
            </p>
            <p>
              В поле {'"'}новый пароль{'"'} вводим желаемый новый пароль
            </p>
            <p>
              В поле {'"'}Подтвердите пароль{'"'} вводим повторно новый пароль
            </p>
          </li>
          <li>
            <p>
              Далее скачиваем и устанавливаем пакет программ, кнопка для загрузки доступна в
              карточке товара
            </p>
          </li>
          <li>
            <p>
              Откройте Word, закройте все всплывающие окна. Далее нажмите {'"'}Файл{'"'} - {'"'}
              Учетная запись{'"'}и авторизуйтесь в полученный аккаунт, введя НАШ логин (из красного
              поля выше, первая группа символов, пример s94/srctopsoft.store) и новый пароль,
              который вы установили на предыдущем шаге, и нажмите {'"'}Войти{'"'}.
              <br />
              Если в данном меню отображается ВАШ основной аккаунт, из него необходимо выйти, и
              войти под нашим.
            </p>
            <img src={'/assets/images/instructions/6/3.png'} alt='' />
          </li>
          <li>
            <p>Продукт активирован! </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 7,
    title: 'Инструкция по активации Office 365 ',
    image: '/assets/images/instructions/7-387х250.png',
    content: (
      <div>
        <ul>
          <li>
            <p>
              Для активации данного ключа, у вас не должно быть действующей подписки на office 365.
              Если действующая подписка не закончилась, ее необходимо отменить на сайте майкрософт
              по адресу:
              <Link
                to='https://account.microsoft.com/services/microsoft365/details#billing'
                target='_blank'
              >
                https://account.microsoft.com/services/microsoft365/details#billing
              </Link>
              <br />
              Сначала нужно войти на сайт http://office.com/ используя полученный логин и пароль.
            </p>
            <img src={'/assets/images/instructions/7/1.png'} alt='' />
          </li>
          <li>
            <p>
              Далее для активации необходимо скачать наш ВПН клиент, он потребуется 1 раз и только
              для активации.
            </p>
            <p>
              Клиент для Виндовс:
              <Link
                to='https://s3.amazonaws.com/outline-releases/client/windows/stable/Outline-Client.exe'
                target='_blank'
              >
                https://s3.amazonaws.com/outline-releases/client/windows/stable/Outline-Client.exe
              </Link>
            </p>
            <p>
              Клиент для MacOS:
              <Link to='https://itunes.apple.com/app/outline-app/id1356178125' target='_blank'>
                https://itunes.apple.com/app/outline-app/id1356178125
              </Link>
            </p>
            <p>
              После установки клиента, откройте его, он запросит ключ. Напишите в чат поддержки и
              вам выдадут его.
            </p>
          </li>
          <li>
            <p>
              После подключения к ВПН, откройте{' '}
              <Link to='https://setup.office.com/' target='_blank'>
                https://setup.office.com/
              </Link>
            </p>
            <p>
              Войдите в свою учетную запись, вставьте полученный ключ и следуйте инструкции на
              экране.
            </p>
          </li>
          <li>
            <p>Подписка активирована! </p>
          </li>
        </ul>
      </div>
    ),
  },
];
