import { DefaultFooter } from '@ant-design/pro-layout';

const Footer = () => {
  const defaultMessage = '健康科普推优选树';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[]}
    />
  );
};

export default Footer;
