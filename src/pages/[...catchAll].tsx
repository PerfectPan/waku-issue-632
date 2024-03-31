export default async function NotFoundPage() {
  return (
    <div>
      Not Found
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'dynamic',
  };
};
