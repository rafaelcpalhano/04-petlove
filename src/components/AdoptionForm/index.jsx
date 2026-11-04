import "./adoption-form.css"

export default function AdoptionForm() {
  return (
    <form>
        <h2>Quero adotar a Nina</h2>

        <div>
            <label htmlFor="petid">Animal</label>
            <select name="pet" id="petid"></select>
                <option value="">Escolha um animal</option>
        </div>
    </form>
  )
}
