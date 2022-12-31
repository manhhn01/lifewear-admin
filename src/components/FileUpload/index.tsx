import styled from "@emotion/styled";
import { Box, Button, OutlinedInputProps, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { theme } from "../../themes";
import Image from "mui-image";

interface FileUploadProps
  extends Pick<OutlinedInputProps, "fullWidth" | "label" | "required"> {
  multiple?: boolean;
}

const StyledInput = styled("input")`
  height: 0;
  width: 0;
  opacity: 0;
`;

const FileUpload = ({
  fullWidth,
  label,
  required,
  multiple,
}: FileUploadProps) => {
  const [files, setFiles] = useState<FileList | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const renderPreviewImage = () => {
    if (files instanceof FileList) {
      return Array.from(files).map((file, index) => (
        <Image
          width="auto"
          height="100%"
          key={index}
          src={URL.createObjectURL(file)}
        />
      ));
    } else {
      return <></>;
    }
  };

  return (
    <Box width={fullWidth ? "100%" : undefined}>
      <Typography mb={0.5} fontWeight={500}>
        {label}
        {required && (
          <Typography component="span" color={theme.palette.error.main}>
            {" *"}
          </Typography>
        )}
      </Typography>
      <Box display="flex" alignItems="center" gap={2}>
        <Button
          variant="contained"
          onClick={() => {
            inputRef.current?.click();
          }}
        >
          {`Select file${multiple ? "s" : ""}`}
        </Button>
        <Typography component="span">
          {!files?.length
            ? "No file selected"
            : `${files.length} file${files?.length > 1 ? "s" : ""} selected`}
        </Typography>
        <StyledInput
          onChange={(e) => {
            setFiles(e.target.files);
            console.log(e.target.files);
          }}
          type="file"
          ref={inputRef}
        />
      </Box>
      {files && (
        <Box mt={2} height={120} display="flex">
          {renderPreviewImage()}
        </Box>
      )}
    </Box>
  );
};

export default FileUpload;
