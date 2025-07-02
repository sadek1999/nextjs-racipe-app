

export default function Recipe({params}) {
    const {recipeId}=params;
  return (
    <div>
        <h1 className="text-center text-2xl font-bold ">{recipeId} </h1>
    </div>
  )
}
