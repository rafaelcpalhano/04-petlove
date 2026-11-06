import { useForm} from "react-hook-form"

import "./adoption-form.css"

export default function AdoptionForm({ pets}) {
  const { register, handleSubmit } = useForm();

  function submitForm(data) {
    console.log(data);
  };

  return (
    <form className="adoption-form" onSubmit={handleSubmit(submitForm)}>
        <h2 className="form-title">Quero adotar a Nina</h2>

        <div className="field">
            <label htmlFor="petId">Animal</label>
            <select name="pet" id="petId" {...register("petID")}>
                <option value="">Escolha um animal</option>
                {
                  pets.map((pet) => (
                    <option key={pet.id} value={pet.id}>
                      {pet.name}
                    </option>
                  ))
                }
            </select>
        </div>

<div className="field">
  <label htmlFor="name">Nome completo</label>
  <input id ="name" name="name" type="text" {...register("name")} />
</div>

<div className="field">
  <label htmlFor="email">E-mail</label>
  <input id="email" name="email" type="email"  {...register("email")} />
</div>

<div className="field">
  <label htmlFor="whatsapp">Whatsapp</label>
  <input id="whatsapp" name ="whatsapp" type="tel"  {...register("whatsapp")}/>
  <p className="hint">Com DDD. Pode usar espaço espaço, hifen e parênteses</p>
</div>

<div className="field">
  <label htmlFor="birthDate">Data de Nascimento</label>
  <input id="birthDate" name="birthDate" type="date"  {...register("birthDate")}/>
</div>

<div className="field">
  <label htmlFor="">Moradia</label>
  <select name="housing" id="housing"  {...register("housing")}>
    <option value="">Escolha moradia</option>
    <option value="casa-com-quintal">Casa com quintal</option>
    <option value="casa-sem-quintal">Casa sem quintal</option>
    <option value="apartamento">Apartamento</option>
  </select>
</div>

<div className="field">
  <label htmlFor="reason">Porque você quer adotar?</label>
  <textarea name="reason" id="reason"  {...register("reason")}></textarea>
</div>

<div className="field field-check">
  <input type="checkbox" id="terms"  {...register("terms")} />
  <label htmlFor="terms">
    Li e concordo com o termo de adoção responsável.
  </label>
</div>

<button type="submit">Enviar interesse </button>

    </form>
  )
}
