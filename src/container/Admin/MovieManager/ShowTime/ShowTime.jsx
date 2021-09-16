import React from 'react'
import { Form, Input, Button, Checkbox, DatePicker,InputNumber } from 'antd';
import { Cascader } from 'antd';

export default function ShowTime() {
   
    const handleChangeHeThongRap = (value) => {

    }
    const onOk = (value) => {}
    const onChange=(value) => {

    }
    const handleChangeNumber = (value) => {

    }
    return (

        <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
        >
            <h3 className="text-2xl">Tạo lịch</h3>

            <Form.Item
                label="hệ thống râp"  >
                <Cascader options={[{ label: 'AA', value: "AA" }, { label: 'BB', value: 'BB' }]} onChange={handleChangeHeThongRap} placeholder="Please select" />
            </Form.Item>

            <Form.Item
                label="Cum Rap"  >
                <Cascader options={[{ label: 'AA', value: "AA" }, { label: 'BB', value: 'BB' }]} onChange={handleChangeHeThongRap} placeholder="Please select" />
            </Form.Item>
            <Form.Item
            label=" ngày Khơi chiếu, giờ chiếu"
            >
                <DatePicker showTime onChange={onChange} onOk={onOk} />
            </Form.Item>
            <Form.Item
            label=" ngày Khơi chiếu, giờ chiếu"
            >
                <InputNumber min={1} max={10} defaultValue={3} onChange={handleChangeNumber} />
            </Form.Item>
            <Form.Item
            label=" Tạo Lịch chiếu"
            >
                <Button>Tạo Lịch chiếu</Button>
            </Form.Item>
        </Form >


    )
}
