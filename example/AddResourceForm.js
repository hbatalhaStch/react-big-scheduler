import React from 'react'
import { Modal, Form, Input, Radio } from 'antd';
const FormItem = Form.Item;


const AddResourceForm = (
    (props) => {
        const { visible, onCancel, onCreate, form } = props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                open={visible}
                title="New Resource"
                okText="Create"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical" >
                    <FormItem label="Name">
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Please input the name of the resource!' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
);

export default AddResourceForm
