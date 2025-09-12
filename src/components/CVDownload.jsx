  import React from "react";

  export default function DownloadButton() {
    const downloadFile = () => {
      window.location.href = "https://docs.google.com/document/d/e/2PACX-1vRlDor9pYEtx5zHvVKuTB_KVHCNp18oL54ggWkSIrGkn5Wu2B6eHvTWmWtrpUn8AqNFRp9sHkpJquzF/pub"
    };
    return (
        <button onClick={downloadFile}></button>
    )
  }
