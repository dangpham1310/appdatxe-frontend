import { Shield, UserCheck, Settings, Clock, Mail, Edit3, Info } from 'lucide-react';
import Image from 'next/image';

const PrivacyPolicyPage = () => {
  const policySections = [
    {
      title: 'Giới thiệu chung',
      icon: Info,
      content: [
        'Chính sách này áp dụng cho tất cả các khách hàng, hành khách, nhà cung cấp, đối tác (như lái xe), nhà thầu và các nhà cung cấp dịch vụ (sau đây được gọi chung là "bạn", "của bạn").',
        '"Dữ Liệu Cá Nhân" là bất kỳ thông tin nào có thể sử dụng để nhận dạng bạn hoặc dựa vào đó mà bạn được xác định. Điều này bao gồm nhưng không giới hạn ở tên, quốc tịch, số điện thoại, chi tiết thẻ tín dụng và ngân hàng, sở thích cá nhân, địa chỉ email, hình ảnh của bạn, số nhận dạng do chính phủ cấp, dữ liệu sinh trắc học, chủng tộc, ngày sinh, tình trạng hôn nhân, tôn giáo, thông tin sức khoẻ, xe và thông tin bảo hiểm.',
      ],
    },
    {
      title: 'Mục đích và phạm vi thu thập',
      icon: UserCheck,
      content: [
        'Việc thu thập dữ liệu chủ yếu trên Ứng dụng cung cấp dịch vụ TMĐT Đón và Đến bao gồm: email, điện thoại, tên đăng nhập, mật khẩu đăng nhập (thành viên). Đây là các thông tin mà Đón và Đến cần thành viên cung cấp bắt buộc khi đăng ký sử dụng dịch vụ và để Đón và Đến liên hệ xác nhận khi người có nhu cầu sử dụng đăng ký sử dụng dịch vụ trên Ứng dụng nhằm đảm bảo quyền lợi cho cho người sử dụng.',
        'Các thành viên không buộc phải sử dụng các dịch vụ đính kèm khi cài đặt và sử dụng ứng dụng. Các thành viên sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động sử dụng dịch vụ dưới tên đăng ký, mật khẩu và hộp thư điện tử của mình. Ngoài ra, thành viên có trách nhiệm thông báo kịp thời cho Ứng dụng cung cấp dịch vụ TMĐT Đón và Đến về những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của bên thứ ba để có biện pháp giải quyết phù hợp.',
      ],
    },
    {
      title: 'Phạm vi sử dụng thông tin',
      icon: Settings,
      content: [
        'Ứng dụng cung cấp dịch vụ TMĐT Đón và Đến sử dụng thông tin thành viên cung cấp để:',
        '- Cung cấp các dịch vụ đến Thành viên;',
        '- Gửi các thông báo về các hoạt động trao đổi thông tin giữa thành viên và Ứng dụng cung cấp dịch vụ TMĐT Đón và Đến;',
        '- Ngăn ngừa các hoạt động phá hủy tài khoản người dùng của thành viên hoặc các hoạt động giả mạo Thành viên;',
        '- Liên lạc và giải quyết với thành viên trong những trường hợp đặc biệt.',
        '- Không sử dụng thông tin cá nhân của thành viên ngoài mục đích xác nhận và liên hệ có liên quan đến giao dịch tại Đón và Đến.',
        'Trong trường hợp có yêu cầu của pháp luật: Ứng dụng cung cấp dịch vụ TMĐT Đón và Đến có trách nhiệm hợp tác cung cấp thông tin cá nhân thành viên khi có yêu cầu từ cơ quan tư pháp bao gồm: Viện kiểm sát, tòa án, cơ quan công an điều tra liên quan đến hành vi vi phạm pháp luật nào đó của người tìm kiếm thông tin. Ngoài ra, không ai có quyền xâm phạm vào thông tin cá nhân của thành viên.',
      ],
    },
    {
      title: 'Thời gian lưu trữ thông tin',
      icon: Clock,
      content: [
        'Dữ liệu cá nhân của Thành viên sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ hoặc tự thành viên đăng nhập và thực hiện hủy bỏ. Còn lại trong mọi trường hợp thông tin cá nhân thành viên sẽ được bảo mật trên máy chủ của Đón và Đến.',
      ],
    },
    {
      title: 'Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân',
      icon: Mail,
      content: [
        'Email: vuvanloind1210@gmail.com',
      ],
    },
    {
      title: 'Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình',
      icon: Edit3,
      content: [
        'Thành viên có quyền tự kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ thông tin cá nhân của mình bằng cách đăng nhập vào tài khoản và chỉnh sửa thông tin cá nhân hoặc yêu cầu Đón và Đến thực hiện việc này. Khi tiếp nhận những phản hồi này, Đón và Đến sẽ xác nhận lại thông tin, phải có trách nhiệm trả lời lý do và hướng dẫn thành viên khôi phục hoặc xóa bỏ thông tin cá nhân thành viên.',
      ],
    },
    {
      title: 'Cam kết bảo mật thông tin cá nhân của thành viên',
      icon: Shield,
      content: [
        'Thông tin cá nhân của thành viên trên Đón và Đến được Đón và Đến cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân của Đón và Đến. Việc thu thập và sử dụng thông tin của mỗi thành viên chỉ được thực hiện khi có sự đồng ý của thành viên sử dụng việc đó trừ những trường hợp pháp luật có quy định khác.',
        'Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên thứ 3 nào về thông tin cá nhân của thành viên khi không có sự cho phép đồng ý từ thành viên.',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-20 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&auto=format&fit=crop&q=80" // Example background image
            alt="Privacy Background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <Shield className="w-16 h-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            CHÍNH SÁCH BẢO MẬT THÔNG TIN
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Chính sách bảo mật này ("chính sách") mô tả cách thức Đón và Đến và các tổ chức, pháp nhân cùng chịu chung sự kiểm soát (sau đây gọi chung là "Đón và Đến", "chúng tôi", "của chúng tôi") thu thập, sử dụng, xử lý và tiết lộ Dữ Liệu Cá Nhân của bạn thông qua việc sử dụng Ứng Dụng và Website của Đón và Đến (sau đây được gọi chung là "Ứng Dụng" và "Website"), sản phẩm, tính năng và các dịch vụ khác trên toàn cầu (gọi chung là "Dịch vụ").
          </p>
        </div>
      </div>

      {/* Policy Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {policySections.map((section, index) => (
            <section key={index} className="p-8 bg-white rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <section.icon className="w-8 h-8 text-gray-900 mr-4 flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <footer className="py-12 bg-gray-100 text-center">
        <p className="text-gray-600">
          Chính sách này được cập nhật lần cuối vào [Ngày cập nhật].
        </p>
        <p className="text-gray-600 mt-2">
          Đón Và Đến &copy; {new Date().getFullYear()} - Mọi quyền được bảo lưu.
        </p>
      </footer>
    </main>
  );
};

export default PrivacyPolicyPage; 