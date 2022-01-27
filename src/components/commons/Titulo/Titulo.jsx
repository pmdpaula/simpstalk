import appConfig from '../../../config/config.json';

const Titulo = ({ children, tag }) => {
  const Tag = tag || 'h1';
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>
        {`
          ${Tag} {
            color: ${appConfig.theme.colors.neutrals['000']};
            font-size: 24px;
            font-weight: 600;
          }
        `}
      </style>
    </>
  );
};

export default Titulo;
