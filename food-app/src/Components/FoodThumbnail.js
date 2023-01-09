const FoodThumbnail = (props) => {
  const styleTableData = props.styleItem;
  const span = props.spanCol ?? 0;
  const { url, alternate, img_w, img_h } = props.imgObj;
  return (
    <td style={styleTableData} colSpan={span}>
      <img src={url} alt={alternate} width={img_w} height={img_h} />
    </td>
  );
};

export default FoodThumbnail;
