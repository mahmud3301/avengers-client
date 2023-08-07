import Banner from "../../Shared/Banner";
import Faq from "../../Shared/Faq";
import SubscribeUs from "../../Shared/SubscribeUs";
import Form from "./form";
import Text from "./text";

const Contract = () => {
  return (
    <div>
      <Banner
        title={"Contract Us"}
        imageUrl={
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6ba2f2be-be13-46f6-aa12-b87eafc5681b/dd21xbv-6017d26e-6ff9-4e7f-a489-1a209dba8da2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZiYTJmMmJlLWJlMTMtNDZmNi1hYTEyLWI4N2VhZmM1NjgxYlwvZGQyMXhidi02MDE3ZDI2ZS02ZmY5LTRlN2YtYTQ4OS0xYTIwOWRiYThkYTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hHMh56Z-UWJYOCaPEK4APLyY0X7ppozdNGe0rh7eFGI"
        }
      />
      <Text />
      <img
        className="justify-center items-center mx-auto my-12"
        src="https://www.freepnglogos.com/uploads/avengers-png/avengers-png-transparent-images-download-clip-art-13.png"
        alt=""
      />
      <Form />
      <Faq />
      <SubscribeUs />
    </div>
  );
};

export default Contract;
