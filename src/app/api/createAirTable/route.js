// app/api/createRecord/route.js
import { NextResponse } from 'next/server';

export async function POST(request, res) {
    const { fields } = await request.json();

    const personalAccessToken = process.env.AIRTABLE_PAT;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_TABLE_NAME;

    const url = `https://api.airtable.com/v0/${baseId}/${tableName}`;
    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${personalAccessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fields }),
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json({ error: data }, { status: response.status });
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
