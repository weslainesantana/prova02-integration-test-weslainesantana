import { spec } from 'pactum';
import { StatusCodes } from 'http-status-codes';

const baseUrl = 'https://restful-booker.herokuapp.com';

describe('Restful-booker API - Teste de Criação de Reserva', () => {
  it('Deve criar uma nova reserva com sucesso', async () => {
    await spec()
      .post(`${baseUrl}/booking`)
      .withHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
      .withJson({
        firstname: 'Maria',
        lastname: 'Silva',
        totalprice: 150,
        depositpaid: true,
        bookingdates: {
          checkin: '2025-09-24',
          checkout: '2025-09-28'
        },
        additionalneeds: 'Breakfast'
      })
      .expectStatus(StatusCodes.OK) // Corrigido para aceitar o status 200
      .expectJsonLike({
        booking: {
          firstname: 'Maria',
          lastname: 'Silva'
        }
      })
      .stores('bookingId', 'bookingid');
  });
});