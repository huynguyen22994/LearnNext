import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
     <Head>
        <title>First Post - Huy Nguyen</title>
        {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> */} 
        {/* Đây là cách thuần của HTML để chèn file JS, các này làm giảm perfomance của web. Nên dùng script của next */}
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      {/* strategy kiểm soát khi tập lệnh của bên thứ ba sẽ tải. Một giá trị của lazyOnload yêu cầu Next.js tải tập lệnh cụ thể này một cách lười biếng trong thời gian không hoạt động của trình duyệt */}
      {/* onLoad được sử dụng để chạy bất kỳ mã JavaScript nào ngay sau khi tập lệnh tải xong. Trong ví dụ này, chúng tôi đăng nhập một thông báo vào bảng điều khiển đề cập rằng tập lệnh đã tải chính xác */}
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      </Layout>
  );
}