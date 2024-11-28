import RootLocaleLayout from "./RootLocaleLayout.server";
import ClientLoader from "./ClientLoader";

export default function LayoutWrapper(props: any) {
  return (
    <RootLocaleLayout {...props}>
      <ClientLoader>{props.children}</ClientLoader>
    </RootLocaleLayout>
  );
}
