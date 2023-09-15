# NEXT JS

## Tính Năng Chính Của NEXTJS

- 1. Routing: Định nghĩa routing dự trên file-system
- 2. Rendering: Hỗ trợ Client-side và cả Server-side rendering. Tối ưu hóa Static and Dynamic Rendering trên server NextJS
- 3. Data Fetching: Fetching data với async/await trên server component và `fetch` có thể mở rộng bằng việc caching, lưu vào bộ nhớ đệm và revalidation
- 4. Styling: Hổ trợ CSS Modules, Tailwind CSS và CSS-in-JS
- 5. Optimizations: Tối ưu hóa hình ảnh, phông chữ và tập lệnh để cải thiện Trải nghiệm người dùng và Các chỉ số quan trọng về trang web cốt lõi của ứng dụng của bạn.
- 6. TypeScript: Hỗ trợ Typescript để dể dàng check kiểu dữ liệu
- 7. Không cần phải config Babel, Webpack phức tạp như React App nữa, mà Next đã làm thay

## App Router vs Pages Router
Next.js có hai bộ định tuyến khác nhau: the App Router và the Pages Router.
    - App Router: là bộ định tuyến mới hơn cho phép bạn sử dụng các tính năng mới nhất của React, chẳng hạn như Thành phần máy chủ và Truyền phát
    - Page Router: là bộ định tuyến Next.js ban đầu, cho phép bạn xây dựng các ứng dụng React do máy chủ kết xuất và tiếp tục được hỗ trợ cho các ứng dụng Next.js cũ hơn.

## Cách Bên Dưới Next Hoạt Động

- 1. Development đến Production: Tùy vào môi trường mà Next sẽ ưu tiên trải nghiệm cho đối tượng khác nhau. Ví dụ ở môi trường Development next sẽ hổ trợ trải nghiệm của Dev như TypeScript, ESLint và Fast Fresh Refresh để dev nhanh hơn. Ở môi trường Production Next sẽ optimize bằng các khái niệm như: compiled, bundled, minified, and code split.
- 2. Compiled: Biên dịch đề cập đến quá trình lấy mã bằng một ngôn ngữ và xuất nó sang ngôn ngữ khác hoặc phiên bản khác của ngôn ngữ đó.
- 3. Minifying: là quá trình loại bỏ các comment code, dấu cách, xuống dòng và định dạng mã không cần thiết mà không thay đổi chức năng của mã. Mục tiêu là cải thiện hiệu suất của ứng dụng bằng cách giảm kích thước tệp. Trong Next.js, các tệp JavaScript và CSS được tự động thu nhỏ để sản xuất.
- 4. Bundling: Đóng gói là quá trình giải quyết web dependencies và merge (hoặc 'package') các tệp (hoặc module) thành các gói được tối ưu hóa cho trình duyệt, với mục tiêu giảm số lượng yêu cầu tệp khi người dùng truy cập trang web.
- 5. Code Splitting: Next.js có hỗ trợ tích hợp để tách mã. Mỗi tệp bên trong `pages/`` của bạn sẽ được tự động chia mã thành gói JavaScript riêng trong bước xây dựng.
- 6. Build Time & Runtime: Build time là thời gian để dev app, bao gồm chuẩn các tệp html static, js chạy trên máy chủ, js chạy trên máy khách, css. Runtime là thời gian ứng dụng chạy để đáp ứng yêu cầu của người dùng
- 7. Client and Server: Client là máy khách gửi yếu cầu đến máy chủ và nhận về phản hồi để render. Máy chủ đề cập đến máy tính trong một trung tâm dữ liệu lưu trữ mã ứng dụng của bạn, nhận yêu cầu từ máy khách, thực hiện một số tính toán và gửi lại phản hồi thích hợp.
- 8. Rendering: Với Next.js, hổ trợ 3 phương thức render là: Server-Side Rendering, Static Site Generation và Client-Side Rendering. Pre-Rendering bao gồm 2 phương thức Server-Side Rendering (`getServerSideProps`), Static Site Generation (`getStaticProps`)
    - . Server-Side Rendering (SSR):
        Server-Side Rendering là quá trình tạo ra trang web từ phía máy chủ trước khi nó được gửi đến trình duyệt. Khi một yêu cầu được gửi từ trình duyệt, máy chủ sẽ xử lý yêu cầu và tạo ra HTML hoàn chỉnh cho trang web. Sau đó, nội dung HTML này được gửi đến trình duyệt và hiển thị cho người dùng.

        Với SSR trong Next.js, trang web được tạo ra từ phía máy chủ mỗi khi có yêu cầu mới. Điều này giúp tối ưu hóa SEO, hiển thị nhanh chóng nội dung cho người dùng và cung cấp trải nghiệm tốt hơn cho ứng dụng web.

    - . Static Site Generation (SSG):
        Static Site Generation là quá trình tạo ra các trang web tĩnh trước khi chúng được gửi đến trình duyệt. Trong Next.js, bạn có thể xác định trước các trang cần được tạo ra và dữ liệu cần được lấy trước. Khi ứng dụng được xây dựng, các trang web tĩnh sẽ được tạo ra và được lưu trữ trên máy chủ hoặc dịch vụ lưu trữ tĩnh. Khi một yêu cầu được gửi từ trình duyệt, trang web tĩnh được gửi trực tiếp từ máy chủ hoặc dịch vụ lưu trữ tĩnh mà không cần xử lý từ phía máy chủ.

        SSG trong Next.js giúp cải thiện hiệu suất và tốc độ tải trang bằng cách giảm thời gian xử lý yêu cầu từ phía máy chủ. Nó cũng cho phép bạn tạo ra các trang web tĩnh với dữ liệu được tạo ra tại thời điểm xây dựng ứng dụng.

- 9. CDN (Content Delivery Network) and the Edge: Trong Next.js, vì pre-rendering có thể được thực hiện trước thời hạn, CDN rất phù hợp để lưu trữ kết quả tĩnh của công việc - giúp phân phối nội dung nhanh hơn. Edge là một máy chủ phẩn bố theo địa lý dùng để chia nhỏ một số đoạn code cho server và client để giảm tải việc chạy trên một Server Gốc.
    - https://nextjs.org/docs/pages/building-your-application/routing/middleware
    - https://nextjs.org/docs/app/building-your-application/rendering/server-components#react-server-components-alpha
    - https://vercel.com/features/edge-functions
