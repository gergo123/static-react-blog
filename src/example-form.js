import { useForm } from "react-hook-form";

const ExampleForm = ({ ...props }) => {
    // Using example from https://react-hook-form.com/get-started#Quickstart
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => alert(JSON.stringify(data));

    console.log(watch("example")); // watch input value by passing the name of it

    return (<>
        Hello from example form!
        <form onSubmit={handleSubmit(onSubmit)} className="border-red-100 border-2 p-2">
            {/* register your input into the hook by invoking the "register" function */}
            <label for="example" className="block">
                Example<br />
                <input id="example" defaultValue="test" {...register("example")} />
            </label>

            {/* include validation with required or other standard HTML validation rules */}
            <label for="exampleRequired" className="block">
                Example required field<br />
                <input id="exampleRequired" {...register("exampleRequired", { required: true })} />
            </label>

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <div className="text-red-800">This field is required</div>}

            <input type="submit" className="border-2 mt-2 p-4 pb-2 pt-2 bg-emerald-400 white" />
        </form>
    </>);
}

export default ExampleForm;
