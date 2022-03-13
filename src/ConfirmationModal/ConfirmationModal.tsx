import { Button, Modal } from "react-bootstrap";
import { Post } from "../interfaces";

interface Props {
  show: boolean;
  onHide: () => void;
  post: Post;
}

const ConfirmationModal = ({ show, onHide, post }: Props) => {
  console.log(post);

  const handleConfirm = () => {
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Do you want to delete the post <b>{post.title}</b>?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
