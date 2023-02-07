import React from 'react'
import { Modal, Form, Input } from 'antd';
const FormItem = Form.Item;

const AddResourceForm = (
    (props) => {
        const { visible, onCancel, onCreate } = props;
        return (
            <Modal
                open={visible}
                title="New Resource"
                okText="Create"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical" >
                    <FormItem label="Name" name='name' rules={[{ required: true, message: 'Please input the name of the resource!' }]}>
                        <Input />
                    </FormItem>
                </Form>
            </Modal>
        );
    }
);

export default AddResourceForm
