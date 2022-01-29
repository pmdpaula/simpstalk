import WebsitePageWrapper from '..';

export default function websitePageHOC(
  PageComponent,
  { pageWrapperProps } = { pageWrapperProps: {} },
) {
  return (props) => (
    <WebsitePageWrapper
      {...pageWrapperProps}
      // {...props.pageWrapperProps}
      // messages={props.messages}
    >
      <PageComponent {...props} />
    </WebsitePageWrapper>
  );
}
