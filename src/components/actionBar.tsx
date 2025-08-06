export default function ActionBar() {
  return (
    <div className="flex flex-row gap-3">
      {Array.from([ "#FF5F56","#FFBD2E","#27C93F"]).map((color, index) => {
        return (
          <div className={`w-3  h-3 rounded-full`} style={{backgroundColor: `${color}` }} key={index} />
        );
      })}
    </div>
  );
}
