const style = {
  height: `5vh`,
  width: `calc(100% - 25rem)`,
  textAlign: `center`,
  color: `#f0f0f0`,
  backgroundColor: `#41495c`,
  lineHeight: `5vh`,
};

function MoviesCount() {
  return (
    <div style={style} className="countAlert">
      0개의 영화가 남아있습니다.
    </div>
  );
}
export default MoviesCount;
