type HelloProps = {
  name: string;
};

export const Hello = ({ name }: HelloProps) => {
  return (
    <>
      Hey {name}, this is our first component and we are using state variable !
    </>
  );
};
